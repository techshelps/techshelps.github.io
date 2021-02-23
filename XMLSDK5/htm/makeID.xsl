<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt">
  <xsl:output omit-xml-declaration="yes"/>
                  
  <xsl:template match="/">
      <xsl:apply-templates/>
  </xsl:template>  

  <xsl:template match="@*|node()">
     <xsl:value-of select="generate-id()"/>
  </xsl:template>
   
  
</xsl:stylesheet>
