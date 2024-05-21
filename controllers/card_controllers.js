const {
  getcardDetails,
  addcardDetails,
  getcardDetailsById,
  updatecardDetails,
  deletecardDetails,
} = require("../models/repositry/card.repositry");
const { addcardproductDetails } = require("../models/repositry/cardproduct.repositry");
const { errorHandle } = require("../utils/ErrorFiles/errorHandler");

exports.getCardDetails = (req, res) => {
  getcardDetails()
    .then((cardDetails) => {
      res.send(cardDetails);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal error");
    });
};

exports.addCardDetail = (req, res) => {
  const cData = {
    qty: req.body.qty,
    price: req.body.price,
    totalPrice: (req.body.qty) * (req.body.price),
    userId: req.body.userId
  };
  let result={};
  addcardDetails(cData)
    .then((data) => {
      const cpdata = {
        cardId:data.id,
        ProductId:req.body.pId
      }
      result={...data};
      addcardproductDetails(cpdata)
      .then((cpdata)=>{   
        result = {...result,...cpdata};    
         res.send(result);
      })
      .catch((err) => {
        errorHandle(err);
        res.send("internal server error");
      })
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.getCardDataById = (req, res) => {
  // console.log(req.params.categeoryid)
  getcardDetailsById(req.params.cardid)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.updateCardDetail = (req, res) => {
  const cardData = {
    qty: req.body.title,
    price: req.body.desc,
    totalPrice: qty * price,
    id: req.body.cid,
  };
  updatecardDetails(cardData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.deleteCardDetail = (req, res) => {
  deletecardDetails(req.params.cid)
    .then((data) => {
      res.send([data]);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};
