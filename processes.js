$(document).ready(function () {
        $('#fullpage').fullpage({
            anchors: ['analysis', 'research', 'wireframes', 'design', 'development', 'test']
        });
            var request = $.get("https://design-sprint-garage.prismic.io/api/v2/documents/search?ref=Wv1H8SgAAKZKkGqI&q=[[at(document.type,%22garage-process%22)]]", result => result)
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
                            var imgElem3 = document.querySelector(".content-wireframe-img");
                            $(".content-wireframe-img").attr("src", wireframeImage);
                            
                            var designImage = results[3].data.process_image.url;
                            var imgElem4 = document.querySelector(".content-design-img");
                            $(".content-design-img").attr("src", designImage);
                            
                            var developmentImage = results[1].data.process_image.url;
                            var imgElem5 = document.querySelector(".content-development-img");
                            $(".content-development-img").attr("src", developmentImage);
                            
                            var testingImage = results[2].data.process_image.url;
                            var imgElem6 = document.querySelector(".content-testing-img");
                            $(".content-testing-img").attr("src", testingImage);
                            
                            
                    })
                    .fail(function () {
                            alert("error");
                    })
                    .always(function () {
                            alert("finished");
                    });
    
    
    });