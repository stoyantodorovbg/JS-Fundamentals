/**
 * Created by Stoyan on 13.6.2017 г..
 */
function format (arr) {
    let text = arr[0];
    text = text.replace(/[.,!?:;]\s*/g, match => match.trim() + ' ');
    text = text.replace(/\s*[.,!?:;]/g, match => match.trim());
    text = text.replace(/(\.\s*)+!/g, match => match.replace(/\s+/g, ''));
    text = text.replace(/\.\s*\d/g, match => match.replace(/\s+/g, ''));
    text = text.replace(/\"([^\"]*)\"/g, (match, gr1) => `"${gr1.trim()}"`);

    console.log(text);

}

format(['Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. Quotation should be should be trimmed after additional spaces are given:"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!']);
