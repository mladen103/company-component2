import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { 

      // Zbog template-a i eksternih js-ova, nije se naslo bolje resenje..

      document.getElementById("modernizrScript").remove();
      var modernizrScript = document.createElement("script");
      modernizrScript.setAttribute("id", "modernizrScript");
      modernizrScript.setAttribute("src", "assets/js/modernizr-2.6.2.min.js");
      document.body.appendChild(modernizrScript);
  
      document.getElementById("jqueryScript").remove();
      var jqueryScript = document.createElement("script");
      jqueryScript.setAttribute("id", "jqueryScript");
      jqueryScript.setAttribute("src", "assets/jquery/jquery.min.js");
      document.body.appendChild(jqueryScript);
  
      document.getElementById("jqueryEasingScript").remove();
      var script2 = document.createElement("script");
      script2.setAttribute("id", "jqueryEasingScript");
      script2.setAttribute("src", "assets/js/jquery.easing.1.3.js");
      document.body.appendChild(script2);

      document.getElementById("bootstrapBundleScript").remove();
      var bootstrapBundleScript = document.createElement("script");
      bootstrapBundleScript.setAttribute("id", "bootstrapBundleScript");
      bootstrapBundleScript.setAttribute("src", "node_modules/bootstrap/js/bootstrap.bundle.min.js");
      document.body.appendChild(bootstrapBundleScript);
  
      document.getElementById("jqueryWaypointsScript").remove();
      let jqueryWaypointsScript = document.createElement("script");
      jqueryWaypointsScript.setAttribute("id", "jqueryWaypointsScript");
      jqueryWaypointsScript.setAttribute("src", "assets/js/jquery.waypoints.min.js");
      document.body.appendChild(jqueryWaypointsScript);
  
      document.getElementById("flexSliderScript").remove();
      let flexSliderScript = document.createElement("script");
      flexSliderScript.setAttribute("id", "flexSliderScript");
      flexSliderScript.setAttribute("src", "assets/js/jquery.flexslider-min.js");
      document.body.appendChild(flexSliderScript);
  
      document.getElementById("mainScript").remove();
      let mainScript = document.createElement("script");
      mainScript.setAttribute("id", "mainScript");
      mainScript.setAttribute("src", "assets/js/main.js");
      document.body.appendChild(mainScript);

  }

  ngOnInit() {
  }

}
