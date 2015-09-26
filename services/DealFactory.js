cheepEats.factory("DealFactory", ['$firebase', function DealFactory($firebase) {
  var factory = {};

  var ref = new Firebase("https://glaring-inferno-5851.firebaseio.com/deals");
  // create an AngularFire reference to the data
  //var sync = $firebase(ref);
  //var syncArray = sync.$asArray();
  // synchronize the object with a three-way data binding
  factory.deals = ref;
  ref.set({
    BK: {
      deal: "Whopper",
      numPlates: 50,
      percentDiscount: 30,
      lengthofDeal: 90,
      image: "http://imgur.com/gallery/Gz7RvmC",
      createdAt: Firebase.ServerValue.TIMESTAMP,
      currentTime: 0,
      location: {
        longitude: 49.259926,
        latitude: -123.2483864,
      },
    },
    McD: {
      deal: "Big Mac",
      numPlates: 50,
      percentDiscount: 30,
      lengthofDeal: 90,
      image: "http://imgur.com/gallery/G2w9H0G",
      createdAt: Firebase.ServerValue.TIMESTAMP,
      currentTime: 0,
      location: {
        longitude: 49.259926,
        latitude: -123.2483864,
      },

    },
    Tims: {
      deal: "Breakfast",
      numPlates: 50,
      percentDiscount: 30,
      lengthofDeal: 90,
      image: "http://imgur.com/gallery/1Tbj4fZ",
      createdAt: Firebase.ServerValue.TIMESTAMP,
      currentTime: 0,
      location: {
        longitude: 49.259926,
        latitude: -123.2483864,
      },

    },
  });

  // factory.addDeal = function() {
  //   var newDealRef = factory.deals.set({
  //     title: factory.title,
  //     deal: factory.deal,
  //     numPlates: factory.numPlates,
  //     percentDiscount: factory.percentDiscount,
  //     lengthOfDeal: factory.timeleft,
  //     image: factory.image,
  //     createdAt: Firebase.ServerValue.TIMESTAMP,
  //     currentTime: 0,
  //   });
  // };

  return factory;
}]);
