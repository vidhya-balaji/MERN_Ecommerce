const express=require("express")
const mongoose=require("mongoose");
const cookieParser=require('cookie-parser');
const cors=require('cors');
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

//create a database connection 
mongoose.connect(`mongodb+srv://vidhyabalajinina:szAMZJETHtXMUba1@cluster0.tpfbm.mongodb.net/`)
.then(()=>console.log("MongoDB connected")).catch((error)=>console.log(error));

const app=express()
const PORT=process.env.PORT||5003;
// app.use(
//     cors({origin:'http://localhost:5173/',
//         methods:['GET','POST','DELETE','PUT'],
//         allowedHeaders: [
//             "Content-Type",
//             "Authorization",
//             "Cache-Control",
//             "Expires",
//             "Pragma",
//           ],
//           credentials: true,
//     })
// );

app.use(cors({
    origin: 'http://localhost:5173', // Ensure there's no trailing slash
    credentials: true, // If sending cookies or auth headers
}));

//app.use(express.json());

// app.post('/api/auth/login', (req, res) => {
//     res.json({ message: "Login successful" });
// });

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT,()=>console.log(`Server is now running on port ${PORT}`)
);