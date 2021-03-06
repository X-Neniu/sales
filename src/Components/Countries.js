export default class Countries {  
    getCountries(){
        const allcountries= [
            {country:"Afghanistan", subregion:"Southern Asia"},
            {country:"Albania", subregion:"Southern Europe"},
            {country:"Algeria", subregion:"Northern Africa"},
            {country:"Angola", subregion:"Middle Africa"},
            {country:"Antarctica", subregion:"Antarctica"},
            {country:"Argentina", subregion:"South America"},
            {country:"Armenia", subregion:"Western Asia"},
            {country:"Australia", subregion:"Australia and New Zealand"},
            {country:"Austria", subregion:"Western Europe"},
            {country:"Azerbaijan", subregion:"Western Asia"},
            {country:"Bahamas", subregion:"Caribbean"},
            {country:"Bangladesh", subregion:"Southern Asia"},
            {country:"Belarus", subregion:"Eastern Europe"},
            {country:"Belgium", subregion:"Western Europe"},
            {country:"Belize", subregion:"Central America"},
            {country:"Benin", subregion:"Western Africa"},
            {country:"Bhutan", subregion:"Southern Asia"},
            {country:"Bolivia", subregion:"South America"},
            {country:"Bosnia and Herz.", subregion:"Southern Europe"},
            {country:"Botswana", subregion:"Southern Africa"},
            {country:"Brazil", subregion:"South America"},
            {country:"Brunei", subregion:"South-Eastern Asia"},
            {country:"Bulgaria", subregion:"Eastern Europe"},
            {country:"Burkina Faso", subregion:"Western Africa"},
            {country:"Burundi", subregion:"Eastern Africa"},
            {country:"Cambodia", subregion:"South-Eastern Asia"},
            {country:"Cameroon", subregion:"Middle Africa"},
            {country:"Canada", subregion:"Northern America"},
            {country:"Central African Rep.", subregion:"Middle Africa"},
            {country:"Chad", subregion:"Middle Africa"},
            {country:"Chile", subregion:"South America"},
            {country:"China", subregion:"Eastern Asia"},
            {country:"Colombia", subregion:"South America"},
            {country:"Congo", subregion:"Middle Africa"},
            {country:"Costa Rica", subregion:"Central America"},
            {country:"C??te d'Ivoire", subregion:"Western Africa"},
            {country:"Croatia", subregion:"Southern Europe"},
            {country:"Cuba", subregion:"Caribbean"},
            {country:"Cyprus", subregion:"Western Asia"},
            {country:"Czechia", subregion:"Eastern Europe"},
            {country:"Dem. Rep. Congo", subregion:"Middle Africa"},
            {country:"Denmark", subregion:"Northern Europe"},
            {country:"Djibouti", subregion:"Eastern Africa"},
            {country:"Dominican Rep.", subregion:"Caribbean"},
            {country:"Ecuador", subregion:"South America"},
            {country:"Egypt", subregion:"Northern Africa"},
            {country:"El Salvador", subregion:"Central America"},
            {country:"Eq. Guinea", subregion:"Middle Africa"},
            {country:"Eritrea", subregion:"Eastern Africa"},
            {country:"Estonia", subregion:"Northern Europe"},
            {country:"Ethiopia", subregion:"Eastern Africa"},
            {country:"Falkland Is.", subregion:"South America"},
            {country:"Fiji", subregion:"Melanesia"},
            {country:"Finland", subregion:"Northern Europe"},
            {country:"Fr. S. Antarctic Lands", subregion:"Seven seas (open ocean)"},
            {country:"France", subregion:"Western Europe"},
            {country:"Gabon", subregion:"Middle Africa"},
            {country:"Gambia", subregion:"Western Africa"},
            {country:"Georgia", subregion:"Western Asia"},
            {country:"Germany", subregion:"Western Europe"},
            {country:"Ghana", subregion:"Western Africa"},
            {country:"Greece", subregion:"Southern Europe"},
            {country:"Greenland", subregion:"Northern America"},
            {country:"Guatemala", subregion:"Central America"},
            {country:"Guinea", subregion:"Western Africa"},
            {country:"Guinea-Bissau", subregion:"Western Africa"},
            {country:"Guyana", subregion:"South America"},
            {country:"Haiti", subregion:"Caribbean"},
            {country:"Honduras", subregion:"Central America"},
            {country:"Hungary", subregion:"Eastern Europe"},
            {country:"Iceland", subregion:"Northern Europe"},
            {country:"India", subregion:"Southern Asia"},
            {country:"Indonesia", subregion:"South-Eastern Asia"},
            {country:"Iran", subregion:"Southern Asia"},
            {country:"Iraq", subregion:"Western Asia"},
            {country:"Ireland", subregion:"Northern Europe"},
            {country:"Israel", subregion:"Western Asia"},
            {country:"Italy", subregion:"Southern Europe"},
            {country:"Jamaica", subregion:"Caribbean"},
            {country:"Japan", subregion:"Eastern Asia"},
            {country:"Jordan", subregion:"Western Asia"},
            {country:"Kazakhstan", subregion:"Central Asia"},
            {country:"Kenya", subregion:"Eastern Africa"},
            {country:"Kosovo", subregion:"Southern Europe"},
            {country:"Kuwait", subregion:"Western Asia"},
            {country:"Kyrgyzstan", subregion:"Central Asia"},
            {country:"Laos", subregion:"South-Eastern Asia"},
            {country:"Latvia", subregion:"Northern Europe"},
            {country:"Lebanon", subregion:"Western Asia"},
            {country:"Lesotho", subregion:"Southern Africa"},
            {country:"Liberia", subregion:"Western Africa"},
            {country:"Libya", subregion:"Northern Africa"},
            {country:"Lithuania", subregion:"Northern Europe"},
            {country:"Luxembourg", subregion:"Western Europe"},
            {country:"Macedonia", subregion:"Southern Europe"},
            {country:"Madagascar", subregion:"Eastern Africa"},
            {country:"Malawi", subregion:"Eastern Africa"},
            {country:"Malaysia", subregion:"South-Eastern Asia"},
            {country:"Mali", subregion:"Western Africa"},
            {country:"Mauritania", subregion:"Western Africa"},
            {country:"Mexico", subregion:"Central America"},
            {country:"Moldova", subregion:"Eastern Europe"},
            {country:"Mongolia", subregion:"Eastern Asia"},
            {country:"Montenegro", subregion:"Southern Europe"},
            {country:"Morocco", subregion:"Northern Africa"},
            {country:"Mozambique", subregion:"Eastern Africa"},
            {country:"Myanmar", subregion:"South-Eastern Asia"},
            {country:"N. Cyprus", subregion:"Western Asia"},
            {country:"Namibia", subregion:"Southern Africa"},
            {country:"Nepal", subregion:"Southern Asia"},
            {country:"Netherlands", subregion:"Western Europe"},
            {country:"New Caledonia", subregion:"Melanesia"},
            {country:"New Zealand", subregion:"Australia and New Zealand"},
            {country:"Nicaragua", subregion:"Central America"},
            {country:"Niger", subregion:"Western Africa"},
            {country:"Nigeria", subregion:"Western Africa"},
            {country:"North Korea", subregion:"Eastern Asia"},
            {country:"Norway", subregion:"Northern Europe"},
            {country:"Oman", subregion:"Western Asia"},
            {country:"Pakistan", subregion:"Southern Asia"},
            {country:"Palestine", subregion:"Western Asia"},
            {country:"Panama", subregion:"Central America"},
            {country:"Papua New Guinea", subregion:"Melanesia"},
            {country:"Paraguay", subregion:"South America"},
            {country:"Peru", subregion:"South America"},
            {country:"Philippines", subregion:"South-Eastern Asia"},
            {country:"Poland", subregion:"Eastern Europe"},
            {country:"Portugal", subregion:"Southern Europe"},
            {country:"Puerto Rico", subregion:"Caribbean"},
            {country:"Qatar", subregion:"Western Asia"},
            {country:"Romania", subregion:"Eastern Europe"},
            {country:"Russia", subregion:"Eastern Europe"},
            {country:"Rwanda", subregion:"Eastern Africa"},
            {country:"S. Sudan", subregion:"Eastern Africa"},
            {country:"Saudi Arabia", subregion:"Western Asia"},
            {country:"Senegal", subregion:"Western Africa"},
            {country:"Serbia", subregion:"Southern Europe"},
            {country:"Sierra Leone", subregion:"Western Africa"},
            {country:"Slovakia", subregion:"Eastern Europe"},
            {country:"Slovenia", subregion:"Southern Europe"},
            {country:"Solomon Is.", subregion:"Melanesia"},
            {country:"Somalia", subregion:"Eastern Africa"},
            {country:"Somaliland", subregion:"Eastern Africa"},
            {country:"South Africa", subregion:"Southern Africa"},
            {country:"South Korea", subregion:"Eastern Asia"},
            {country:"Spain", subregion:"Southern Europe"},
            {country:"Sri Lanka", subregion:"Southern Asia"},
            {country:"Sudan", subregion:"Northern Africa"},
            {country:"Suriname", subregion:"South America"},
            {country:"Swaziland", subregion:"Southern Africa"},
            {country:"Sweden", subregion:"Northern Europe"},
            {country:"Switzerland", subregion:"Western Europe"},
            {country:"Syria", subregion:"Western Asia"},
            {country:"Taiwan", subregion:"Eastern Asia"},
            {country:"Tajikistan", subregion:"Central Asia"},
            {country:"Tanzania", subregion:"Eastern Africa"},
            {country:"Thailand", subregion:"South-Eastern Asia"},
            {country:"Timor-Leste", subregion:"South-Eastern Asia"},
            {country:"Togo", subregion:"Western Africa"},
            {country:"Trinidad and Tobago", subregion:"Caribbean"},
            {country:"Tunisia", subregion:"Northern Africa"},
            {country:"Turkey", subregion:"Western Asia"},
            {country:"Turkmenistan", subregion:"Central Asia"},
            {country:"Uganda", subregion:"Eastern Africa"},
            {country:"Ukraine", subregion:"Eastern Europe"},
            {country:"United Arab Emirates", subregion:"Western Asia"},
            {country:"United Kingdom", subregion:"Northern Europe"},
            {country:"United States of America", subregion:"Northern America"},
            {country:"Uruguay", subregion:"South America"},
            {country:"Uzbekistan", subregion:"Central Asia"},
            {country:"Vanuatu", subregion:"Melanesia"},
            {country:"Venezuela", subregion:"South America"},
            {country:"Vietnam", subregion:"South-Eastern Asia"},
            {country:"W. Sahara", subregion:"Northern Africa"},
            {country:"Yemen", subregion:"Western Asia"},
            {country:"Zambia", subregion:"Eastern Africa"},
            {country:"Zimbabwe", subregion:"Eastern Africa"}
        ]
        return(allcountries)
    } 
}
