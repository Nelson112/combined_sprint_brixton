$(document).ready(function () {
        $('#fullpage').fullpage({
            anchors: ['analysis', 'research', 'wireframes', 'design', 'development', 'test']
        });
       
            var request = $.get("https://design-sprint-garage.prismic.io/api/v2/documents/search?ref=Wv2A0ygAANFMkWXi&q=[[at(document.type,%22garage-process%22)]]", result => result)
                    .done(function (json) {
                            const results = JSON.parse(json).results
                            console.log("RESULTS", results);
                            
                            var analysisImage = results[5].data.process_image.url;
                            var imgElem = document.querySelector(".content-analysis-img");
                            $(".content-analysis-img").attr("src", analysisImage);
    
                            var researchImage = results[4].data.process_image.url;
                            var imgElem2 = document.querySelector(".content-research-img");
                            $(".content-research-img").attr("src", researchImage);
    
                            var wireframeImage = results[0].data.process_image.url;
                            var imgElem3 = document.querySelector(".content-wireframes-img");
                            $(".content-wireframes-img").attr("src", wireframeImage);
                            
                            var designImage = results[3].data.process_image.url;
                            var imgElem4 = document.querySelector(".content-design-img");
                            $(".content-design-img").attr("src", designImage);
                            
                            var developmentImage = results[1].data.process_image.url;
                            var imgElem5 = document.querySelector(".content-development-img");
                            $(".content-development-img").attr("src", developmentImage);
                            
                            var testingImage = results[2].data.process_image.url;
                            var imgElem6 = document.querySelector(".content-testing-img");
                            $(".content-testing-img").attr("src", testingImage);

                            var analysisHead = results[5].data.process_type[0].text;
                            var analysisHeadElem = document.querySelector(".analysis-header");
                            analysisHeadElem.innerHTML = analysisHead;
    
                            var researchHead = results[4].data.process_type[0].text;
                            var researchHeadElem = document.querySelector(".research-header");
                            researchHeadElem.innerHTML = researchHead;

                            var wireframesHead = results[0].data.process_type[0].text;
                            var wireframesHeadElem = document.querySelector(".wireframes-header");
                            wireframesHeadElem.innerHTML = wireframesHead;
    
                            var designHead = results[3].data.process_type[0].text;
                            var designHeadElem = document.querySelector(".design-header");
                            designHeadElem.innerHTML = designHead;
    
                            var developHead = results[1].data.process_type[0].text;
                            var developHeadElem = document.querySelector(".develop-header");
                            developHeadElem.innerHTML = developHead;
    
                            var testHead = results[2].data.process_type[0].text;
                            var testHeadElem = document.querySelector(".test-header");
                            testHeadElem.innerHTML = testHead;

                            var analysistext = results[5].data.process_details[0].text;
                            var analysistextElem = document.querySelector(".analysis-text");
                            analysistextElem.innerHTML = analysistext;
    
                            var researchtext = results[4].data.process_details[0].text;
                            var researchtextElem = document.querySelector(".research-text");
                            researchtextElem.innerHTML = researchtext;

                            var wireframestext = results[0].data.process_details[0].text;
                            var wireframestextElem = document.querySelector(".wireframes-text");
                            wireframestextElem.innerHTML = wireframestext;
    
                            var design = results[3].data.process_details[0].text;
                            var designElem = document.querySelector(".design-text");
                            designElem.innerHTML = design;
    
                            var developtext = results[1].data.process_details[0].text;
                            var developtextElem = document.querySelector(".develop-text");
                            developtextElem.innerHTML = developtext;
    
                            var testtext = results[2 ].data.process_details[0].text;
                            var testtextElem = document.querySelector(".test-text");
                            testtextElem.innerHTML = testtext;
                            
                            
                    })
                    .fail(function () {
                            alert("error");
                    })
                    .always(function () {
                            console.log("finished");
                    });
    //REMOVED ALLERT FINISHED
    
    });