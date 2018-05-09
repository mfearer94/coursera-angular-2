(function() {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.buyItems = ShoppingListCheckOffService.getBuyItems();

    toBuy.itemName = "";
    toBuy.quantity = "";

    toBuy.Buy = function(index) {
        ShoppingListCheckOffService.Buy(index);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
    var service = this;

    var buyItems = [{itemName: "President", quantity: "1"},
        {itemName: "Vice President", quantity:"1"},
        {itemName: "Representatives", quantity:"250"},
        {itemName: "Senators", quantity:"100"},
        {itemName: "Supreme Court Justices", quantity: "9"}
        ];

    var boughtItems = [];
    
    service.Buy = function(index){
        //Add the item to boughtItems[]
        var item = {
            itemName: buyItems[index].itemName,
            quantity: buyItems[index].quantity
          };
          boughtItems.push(item);

        //Remove the item from buyItems[]
        buyItems.splice(index, 1);
    };

    service.getBuyItems = function() {
        return buyItems;
    };

    service.getBoughtItems = function() {
        return boughtItems;
    };


}

})();