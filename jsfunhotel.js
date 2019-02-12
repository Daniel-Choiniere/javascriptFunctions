let hotelName = "Javascript Hotel";

let roomTypes = ["Twin", "Single", "Double", "Queen", "King"];
let roomPrices = [75, 85, 100, 150, 200];

let availableRoomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204], [301, 302, 303], [304, 305]];

let bookedRooms = [[],[],[],[],[]];

function availableRoomQty() {
    let totalAvailableRoom = 0;
   for (let i=0; i<availableRoomNumbers.length; i++) {
        totalAvailableRoom += availableRoomNumbers[i].length;
        
   }
   return totalAvailableRoom;
}

// function callback() {
//     console.log("Total rooms avaliable: ", availableRoomQty());
// };

function bookTwin() {
    let result = bookedRooms[0].push(availableRoomNumbers[0].pop());
    console.log(result);
};




console.log(bookTwin());