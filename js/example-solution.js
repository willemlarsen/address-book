var convertNumbersToWords = function(number) {
    
    var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
    var tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


    var convertMillions = function(number) {
        if (number >= 1000000){
            return convertMillions(Math.floor(number / 1000000)) + " million " + convertThousands(number % 1000000);
        } else {
            return convertThousands(number);
        }
    };

    var convertThousands = function(number) {
        if (number >= 1000){
            return convertHundreds(Math.floor(number / 1000)) + " thousand " + convertHundreds(number % 1000);
        } else {
            return convertHundreds(number);
        }
    };

    var convertHundreds = function(number) {
        if (number > 99) {
            return ones[Math.floor(number / 100)] + " hundred " + convertTens(number % 100);
        } else {
            return convertTens(number);
        }
    };

    var convertTens = function(number) {
        if (number < 10) return ones[number];
        else if (number >= 10 && number < 20) {
            return teens[number - 10];
        } else {
            return tens[Math.floor(number / 10)] + " " + ones[number % 10];
        }
    };

    var convert = function(number) {
        if (number === 0) return "zero";
        else return convertMillions(number);
    }
};