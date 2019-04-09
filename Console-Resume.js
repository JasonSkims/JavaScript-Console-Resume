var name = 'Name:';
var fullName = ' Jason Sims';
var career = 'Career: Welder'
var selfDesc = 'Description: I have been a welder most of my life and I am ready to make a change!'

console.log(name + fullName.toUpperCase());
console.log(career)
console.log(selfDesc)
console.log('')

var int = 'My Interest:';
console.log(int)

function interest(interest) {
    console.log('* ' + interest)
};

interest('Playing guitar.');
interest('Hanging out with my freinds and family.')
interest('Playing with my dog.')
console.log('')
var preExp = 'My Previous Experience:'
console.log(preExp)

function displayPosistion(name, title, position) {
    console.log(name);
    console.log(title);
    console.log(position);
};
displayPosistion('Company: Deshazo Crane Company', 'Title: Single Girder Assembler', 'Position: Welder');
console.log('')
displayPosistion('Company: Camping World', 'Title: Sevice Writer/Sales', 'Posistion: Took care of customers every need and ensuring they get their RV back for the payment of services rendered.');
console.log('')
displayPosistion('Company: Swift Transportation', 'Title: OTR Truck Driver', 'Posistion: Delivered materials across all 48 states.')
console.log('')
displayPosistion('Company: Altec Industries', 'Title: Custom Body Builder for all types of utility trucks.', 'Posistion: Welder');
console.log('')

function displaySkill(skills, BAM){
    if(BAM === true) {
        console.log('* BAM: ' + skills);
    } else {
        console.log('* ' + skills);
    }
}

var skills = 'My Skills:'
console.log(skills)

displaySkill('Play the guitar', true);
displaySkill('Class A CDLs and have driven across 40 states within two years.')
displaySkill('Welder with over 15 years of exp.')
displaySkill('Wannabe Gamer', true);
displaySkill('Wannabe Grill Master', true);