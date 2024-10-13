const {} = require("../controllers/promotion");
const { createPromotion, findAllpromotion, findOnepromotion, deletepromotion } = require("../controllers/promotions");
const { updateTransaksi } = require("../controllers/transaksai");
  const upload = require("../midleware/upload");
  // const { updateTransaksi } = require("../controllers/transaksi");
  const promotionRouter = require("express").Router();
  
  promotionRouter.post("/",upload.single("image"),createPromotion);
  promotionRouter.get("/", findAllpromotion);
  promotionRouter.get("/:id", findOnepromotion );
  promotionRouter.patch("/:id",upload.single("image"), updateTransaksi);
  promotionRouter.delete("/:id", deletepromotion);
  
  module.exports = promotionRouter;
  