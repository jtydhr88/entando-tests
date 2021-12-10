<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />news-plugin/static/js/2.36ee67fa.chunk.js"></script>
<script src="<@wp.resourceURL />news-plugin/static/js/main.a217ca9c.chunk.js"></script>
<script src="<@wp.resourceURL />news-plugin/static/js/runtime-main.cda86106.js"></script>

<link href="<@wp.resourceURL />news-plugin/static/css/2.598ea7c3.chunk.css" rel="stylesheet">

<#-- entando_resource_injection_point -->

<@wp.info key="currentLang" var="currentLangVar" />
<@wp.currentWidget param="config" configParam="categoryCode" var="categoryConfig" />
<@wp.currentWidget param="config" configParam="contentTypeCode" var="contentTypeConfig" />
<@wp.currentWidget param="config" configParam="widgetTitle" var="widgetTitleConfig" />
<card-widget locale="${currentLangVar}" service-url="/news-content"
            category-code="${categoryConfig!}" 
            content-type-code="${contentTypeConfig!}"
            widget-title="${widgetTitleConfig!}"
            />
