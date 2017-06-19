/**
 * Created by Stoyan on 6.6.2017 г..
 */
function  replaceData (name, email, phone, message) {

        message.forEach(line => {
            line = line.replace(/<![a-zA-Z]+!>/g, name);
            line = line.replace(/<@[a-zA-Z]+@>/g, email);
            line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
            console.log(line);

        });
}

replaceData('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);
