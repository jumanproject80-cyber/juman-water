const mockData = {
    "1001": { name: "أحمد محمد", billMonth: "أغسطس 2025", consumption: "18", total: "4,800 ريال", balance: "1,200 ريال" },
    "2002": { name: "خالد علي", billMonth: "أغسطس 2025", consumption: "11", total: "3,100 ريال", balance: "0 ريال" }
};

function setText(id, value) {
    document.getElementById(id).textContent = value;
}

function showError(message) {
    document.getElementById("errorText").textContent = message;
    document.getElementById("errorMsg").classList.remove("hidden");
}

function hideError() {
    document.getElementById("errorMsg").classList.add("hidden");
}

function searchAccount() {
    const input = document.getElementById("accountInput");
    const account = input.value.trim();
    const results = document.getElementById("resultsSection");
    const loading = document.getElementById("loadingSpinner");
    hideError(); results.classList.add("hidden");
    if (!account) return showError("الرجاء إدخال رقم الحساب");
    if (!/^\d+$/.test(account)) return showError("رقم الحساب يجب أن يحتوي أرقاماً فقط");
    loading.classList.remove("hidden");
    setTimeout(() => {
        const data = mockData[account];
        loading.classList.add("hidden");
        if (!data) return showError("لم يتم العثور على هذا الحساب");
        setText("resAccountNum", account);
        setText("resName", data.name);
        setText("resBalance", data.balance);
        setText("resBillMonth", data.billMonth);
        setText("resConsumption", data.consumption);
        setText("resTotal", data.total);
        results.classList.remove("hidden");
    }, 800);
}

document.getElementById("accountInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") searchAccount();
});