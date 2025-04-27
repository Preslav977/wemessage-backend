require("dotenv").config();

const express = require("express");

const path = require("node:path");

const session = require("express-session");

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const prisma = require("./db/client");

const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcryptjs");

const cloudinary = require("cloudinary").v2;

const cors = require("cors");

const userRouter = require("./routes/userRouter");

const chatRouter = require("./routes/chatRouter");

const groupRouter = require("./routes/groupRouter");

const globalChatRouter = require("./routes/globalChatRouter");

const asyncHandler = require("express-async-handler");

const verifyToken = require("./middleware/verifyToken");

const compression = require("compression");

const helmet = require("helmet");

const app = express();

app.use(
  cors({
    origin: [
      "https://wemessage-backend.onrender.com/",
      "https://wemessage-frontend.vercel.app",
    ],
  })
);

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const assetsPath = path.join(__dirname + "/public");

app.use(express.static(assetsPath));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: username,
        },
      });

      // console.log(user);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      // console.log(match, password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    // console.log(user);

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.post(
  "users/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.get(
  "users/logout",
  verifyToken,
  asyncHandler(async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("users/login");
    });

    await prisma.user.update({
      where: {
        id: req.authData.id,
      },
      data: {
        online_presence: "OFFLINE",
      },
    });
  })
);

// app.use("/", indexRouter);

app.use(compression());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  })
);

const RateLimit = require("express-rate-limit");

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});

app.use(limiter);

app.use("/users", userRouter);

app.use("/chats", chatRouter);

app.use("/groups", groupRouter);

app.use("/globalChat", globalChatRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.stack);
});

module.exports = app;
