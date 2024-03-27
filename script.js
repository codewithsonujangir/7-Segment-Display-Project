// My Project no. #10




document.addEventListener("DOMContentLoaded", () => {
    // initial digit set to 8 
    displayDigit ("hour-d1", "8");
    // define a variable d (digit) and initial value set to zero
    let d = 0;
    // interval for update digit every single second
    setInterval (() => {
        displayDigit ("hour-d1", d);
        d++;
        if (d > 9) {
            d = 0;
        }
    }, 1000);
});


// Define segments for each digit (0-9)
const segments = [
    [1, 1, 1, 1, 1, 1, 0], // 0
    [0, 1, 1, 0, 0, 0, 0], // 1
    [1, 1, 0, 1, 1, 0, 1], // 2
    [1, 1, 1, 1, 0, 0, 1], // 3
    [0, 1, 1, 0, 0, 1, 1], // 4
    [1, 0, 1, 1, 0, 1, 1], // 5
    [1, 0, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 0, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1]  // 9
];

// Define segments name for each (a-g)
const segment_name = ["a", "b", "c", "d", "e", "f", "g"];





// Function to display a digit
function displayDigit (element, digit) {
    // get element to show digit
    const digit_el = document.getElementById (element);
    // Get segments for the digit
    const segments_on_list = segments[digit];
    // loop
    segments_on_list.forEach ((value, index) => {
        // get segment class name
        const segment_class_name = segment_name[index];
        // get segment element
        const segment_el = digit_el.querySelector (`.${segment_class_name}`);
        if (value) {
            segment_el.classList.add ("segment-on");
            segment_el.classList.remove ("segment-off");
        }else {
            segment_el.classList.remove ("segment-on");
            segment_el.classList.add ("segment-off");
        }
    });
}







