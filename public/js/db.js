let db;

const dbRequest = indexedDB.open("budget", 1);

console.log('db.js')


dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result;

    db.createObjectStore("pending", { autoIncrement: true });
};

dbRequest.onsuccess = function (event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkDatabase();
    }
};


dbRequest.onerror = function (event) {
    console.log("Woah there." + event.target.errorCode);
};



function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");

    const store = transaction.objectStore("pending");

    store.add(record);
}






function checkDatabase() {

    const transaction = db.transaction(["pending"], "readwrite");

    const store = transaction.objectStore("pending");

    const retrieveAll = store.retrieveAll();

    retrieveAll.onsuccess = function () {
        if (retrieveAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(retrieveAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })

                .then(response => response.json())
                .then(() => {
                    const transaction = db.transaction(["pending"], "readwrite");

                    const store = transaction.objectStore("pending");

                    store.clear();

                });
        }
    };
}


window.addEventListener("online", checkDatabase);