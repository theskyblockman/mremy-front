function click_alert() {
    const button_value = document.getElementById("myButton1").value;

    if (button_value === "Copy") {
        const copy_value = document.getElementById("inputshortcut").value;
        navigator.clipboard.writeText(copy_value);
    } else if (button_value === "Shorten") {
        const copy_value = document.getElementById("inputshortcut").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://mremy.herokuapp.com/add_link', true);
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.setRequestHeader('redirect_link', copy_value);

        function onChange() {
            console.log(xhr.readyState);
            console.log(xhr.status);

            console.log(xhr.getResponseHeader('link'));
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const url_txt = `https://www.mremy.me/${xhr.getResponseHeader('link')}`;
                document.getElementById("inputshortcut").value = url_txt;
                document.getElementById("myButton1").value = "Copy";
            }
        }
        xhr.onreadystatechange = onChange;

        xhr.send();
        onChange();
    }
}
