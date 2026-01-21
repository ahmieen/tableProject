const tableData = [
    { id: "Index #", value: "Value" },
    { id: "A1", value: 41 },
    { id: "A2", value: 18 },
    { id: "A3", value: 21 },
    { id: "A4", value: 63 },
    { id: "A5", value: 2 },
    { id: "A6", value: 53 },
    { id: "A7", value: 5 },
    { id: "A8", value: 57 },
    { id: "A9", value: 60 },
    { id: "A10", value: 93 },
    { id: "A11", value: 28 },
    { id: "A12", value: 3 },
    { id: "A13", value: 90 },
    { id: "A14", value: 39 },
    { id: "A15", value: 80 },
    { id: "A16", value: 88 },
    { id: "A17", value: 49 },
    { id: "A18", value: 60 },
    { id: "A19", value: 26 },
    { id: "A20", value: 28 }
];

function getValue(id) {
    const row = tableData.find(row => row.id === id);
    return row ? row.value : 0;
}

const table1Body = document.getElementById('table1-body');

tableData.forEach((row, index) => {
    const tr = document.createElement('tr');

    const tdIndex = document.createElement('td');
    tdIndex.className = 'row-index';
    tdIndex.textContent = index + 1;
    tr.appendChild(tdIndex);

    const tdA = document.createElement('td');
    tdA.textContent = row.id;
    tr.appendChild(tdA);


    const tdB = document.createElement('td');
    tdB.textContent = row.value;
    tr.appendChild(tdB);

    table1Body.appendChild(tr);
});

const valA5 = getValue('A5');
const valA20 = getValue('A20');
const valA15 = getValue('A15');
const valA7 = getValue('A7');
const valA13 = getValue('A13');
const valA12 = getValue('A12');
const resultAlpha = valA5 + valA20;
const resultBeta = valA15 / valA7;
const resultCharlie = valA13 * valA12;


const processedData = [
    { category: 'Alpha', value: resultAlpha },
    { category: 'Beta', value: resultBeta },
    { category: 'Charlie', value: resultCharlie }
];

const table2Body = document.getElementById('table2-body');

processedData.forEach(row => {
    const tr = document.createElement('tr');

    const tdCat = document.createElement('td');
    tdCat.textContent = row.category;
    tr.appendChild(tdCat);

    const tdVal = document.createElement('td');
    tdVal.textContent = row.value;
    tr.appendChild(tdVal);

    table2Body.appendChild(tr);
});
