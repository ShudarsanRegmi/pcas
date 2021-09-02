let descriptionInNepali = "प्रकाश संचार र आपूर्तिकर्ता अग्रणी sth सेवा प्रदायक रामपुर, Thoksila उदयपुर मा स्थित छ। यहाँ प्रदान सेवाहरु पुरा तरिकाले tustrable छन्। दुखाइ नै मुख्य adipisicing टीम को लागी महत्वपूर्ण छ। महान बाध्य तपाइँ देख्नुहुन्छ कि उनीहरु सही ढंगले पछ्याइरहेछन्, हे, कोहि पनि यो मानिस लाई उसको जीवन मा पछ्याउन छोड्दैन, किनकि उनीहरु को समय लाई घृणा गर्दछ र को? समस्या सबैभन्दा योग्य बच्चा हो, अक्सर छैन, तर खुशी यो repels त्याग! दुखाइ रोक्छ र कोहि छैन अन्यथा हाम्रा पुर्खाहरु को एक समान परिहार बाट अन्धो, हामी आवश्यक चापलुसी संग मन कोमलता लिन्छौं, र अझ आलोचना गर्दछौं कि वर्तमान मौसम को कम से कम महत्वपूर्ण परिणामहरु लाई अस्वीकार गर्न को लागी कुनै माफी छैन। उहाँको कारणले पीडा हुन्छ तर हाम्रो अन्यत्र छैन कार्यालयहरु, के त्यो धेरै सत्य हो जुन तपाइँ बुझ्नुहुन्छ? पीडा तिरस्कार गरिएको छ, र जब हामी पूर्वानुमान गर्न सक्छौं र लाभ को आनन्द पछ्याउने चीजहरु लिन सक्छौं, कोहि पनि महान वचनहरु जो उसले चाहन्छन् को कठिनाईहरुमा बाध्य छैन, कोहि कोहि कानून को कोमलता शान्त गर्न को लागी सजिलो छैन; एक चयनित उडान मुठभेड खोज्दै हुनुहुन्छ? हाम्रो समस्याहरु, अन्धा, भ्रष्ट, हाम्रो आवश्यकताहरु संग काउन्टर गर्न को लागी हाम्रो पीडा को स्वागत गर्न को लागी";
let descriptionoInEnglish = "Prakash Communication and Suppliers is leading sth service provider located in Rampur, Thoksila Udayapur. The services provided here are completely tustworthy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur iure consequuntur eos perspiciatis, consectetur nemo sequi deserunt iste ad vitae, enim odit earum tempora atque qui? Molestiae est dignissimos natus non saepe, ipsam repellat voluptatem at deserunt! Impedit doloremque atque nemo, similique alias obcaecati maiores fuga, animi debitis mollitia blanditiis ducimus, nulla veniam porro reprehenderit minima repudiandae consequatur praesentium amet tempore. Dolorum debitis illum sed neque nostrum alias, unde, tempore officia, ipsa iste quod veritatis perspiciatis? Aspernatur dolores, cumque possimus provident et assumenda quae commodi sequi voluptate quisquam laboriosam magni tenetur dicta quos, velit, nemo nam facilis deleniti mollitia iure quaerat delectus fugit perspiciatis? Doloribus nostrum excepturi molestias obcaecati corrupti repellendus necessitatibus";
let descContents = document.getElementById("descContents");
let langCounter = 0;
let descriptionLangchanger = document.getElementById("descriptionLangchanger");
descriptionLangchanger.addEventListener("click", event => {
    console.log("clicked")
    if (langCounter % 2 == 0) {
        descContents.innerText = descriptionInNepali;
        descriptionLangchanger.innerText = "Read in English 🇺🇸";
        descriptionLangchanger.style.backgroundColor = "#041E42";
        descriptionLangchanger.style.color = "#fff";
    } else {
        descContents.innerText = descriptionoInEnglish;
        descriptionLangchanger.innerText = "Read in Nepali 🇳🇵";
        descriptionLangchanger.style.backgroundColor = "#C8102E";

    }
    langCounter++;
})

// Making teh contact cards clickable
let contactListCons = document.getElementsByClassName("contactListCon");
Array.from(contactListCons).forEach(item => {
    item.addEventListener("click", event => {
        console.log(item.children[2].href)
        url = item.children[2].href;
        // var windowSize = "width=" + window.innerWidth + ",height=" + window.innerHeight + ",scrollbars=no";
        // window.open(url, "_self");
        // window.location.href = url;
        // alert(url)
    })
})