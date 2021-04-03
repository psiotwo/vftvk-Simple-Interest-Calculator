function compute()
{
    const p = document.getElementById("principal");
    const principal = p.value;
    if (!principal || principal < 1) {
        alert("Enter a positive number.");
        p.focus();
    } else {
        const rate = document.getElementById("rate").value;
        const years = document.getElementById("years").value;
        const interest = principal * years * rate / 100;
        const year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML
            = `If you deposit <span class="result-highlight">${principal}</span>, at an interest rate of <span class="result-highlight">${rate}%</span>, you will receive an amount of <span class="result-highlight">${interest}</span>, in the year <span class="result-highlight">${year}</span>.`;
    }
}

function updateRate() {
    const rate = document.getElementById("rate").value;
    document.getElementById("rateValue").textContent = rate + " %";
}