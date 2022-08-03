                            
                            
                            /* READ-MORE BUTTON  */


function myFunction(x) {
    if (x.matches) { 
           document.getElementById("extra-text").style.display = "none" ;
            document.getElementById("read-less").style.display = "none" ;
            document.getElementById("m-e-read-more").style.display = "inline" ; 

            document.getElementById("m-e-read-more").onclick = function show() {
            document.getElementById("extra-text").style.display = "inline" ;
            document.getElementById("m-e-read-more").style.display = "none" ;
            document.getElementById("read-less").style.display = "inline"
            }
            
            document.getElementById("read-less").onclick = function hide() {
                document.getElementById("read-less").style.display = "none" ;
                document.getElementById("m-e-read-more").style.display = "inline" ;
                document.getElementById("extra-text").style.display = "none" ;
            }
    }  else{
      document.getElementById("extra-text").style.display = "inline"
    }
  }
  
  var x = window.matchMedia("(max-width: 991.98px)")
  myFunction(x) 
  x.addListener(myFunction) 

                            //Products Animation

  function firstFameProduct(fameProductsMediaQuery1) {
    if (fameProductsMediaQuery1.matches) { 
      document.getElementById("first-fam-prod").className = "col-lg col-md-5 fam-product wow slideInRight";
      document.getElementById("second-fam-prod").className = "col-lg col-md-5 fam-product wow slideInRight";
      document.getElementById("third-fam-prod").className = "col-lg col-md-5 fam-product wow slideInRight";
    } else if(fameProductsMediaQuery2.matches){
      document.getElementById("first-fam-prod").className = "col-lg col-md-5 fam-product ";
      document.getElementById("second-fam-prod").className = "col-lg col-md-5 fam-product ";
      document.getElementById("third-fam-prod").className = "col-lg col-md-5 fam-product ";
    } else {
      document.getElementById("first-fam-prod").className = "col-lg col-md-5 fam-product wow fadeInRight";
      document.getElementById("second-fam-prod").className = "col-lg col-md-5 fam-product wow fadeInRight";
      document.getElementById("third-fam-prod").className = "col-lg col-md-5 fam-product wow fadeInRight";
    }
  }
  
  var fameProductsMediaQuery1 = window.matchMedia("(max-width: 575.98px)")
      fameProductsMediaQuery2 = window.matchMedia("(min-width: 768px) and (max-width: 991.98px)")

  firstFameProduct(fameProductsMediaQuery1) 
  fameProductsMediaQuery1.addListener(firstFameProduct)
  fameProductsMediaQuery2.addListener(firstFameProduct)

                        // Parts Hover Function


  



