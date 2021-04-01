import React from "react";
import "./PageNotFound.scss";

function PageNotFound(props) {
  return (
    <div>
      <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<a href="/">Homepage</a>
		</div>
	</div>
    </div>
  );
}

export default PageNotFound;
