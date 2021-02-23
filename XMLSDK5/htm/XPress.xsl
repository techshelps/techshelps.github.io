<?xml version="1.0"?>
<!-- Generic stylesheet for viewing XML -->
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt">

  <xsl:param name ="expr"/>
  <xsl:param name ="mode" select="node"/>

  <xsl:template match="/">
    <xsl:choose>
      <xsl:when test="$mode='func'">
        <xsl:apply-templates select="." mode="func"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates select="." mode="node"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>  
   
  <xsl:template match="/" mode="func">
     <xsl:value-of select="$expr"/>    
  </xsl:template>

  <xsl:template match="/" mode="node">
    <DIV STYLE="font-family:Tahoma; font-size:11pt; margin-bottom:2em">
       <xsl:apply-templates/>
    </DIV>
  </xsl:template>

  <xsl:template match="*">
    <DIV STYLE="margin-left:1em; color:green">
      <xsl:attribute name="id">
             <xsl:value-of select="generate-id()"/>
      </xsl:attribute>
      &lt;<xsl:value-of select="name()"/><xsl:apply-templates select="@*"/>/&gt;
    </DIV>
  </xsl:template>

  <xsl:template match="*[node()]">
    <DIV STYLE="margin-left:1em">
      <SPAN STYLE="color:olive">
         <xsl:attribute name="id">
             <xsl:value-of select="generate-id()"/>
          </xsl:attribute>&lt;<xsl:value-of select="name()"/><xsl:apply-templates select="@*"/>&gt;</SPAN>
      <xsl:apply-templates select="node()"/>
      <SPAN STYLE="color:olive">&lt;/<xsl:value-of select="name()"/>&gt;</SPAN>
    </DIV>
  </xsl:template>

  <xsl:template match="@*" xml:space="preserve">
    <SPAN STYLE="color:navy"
      ><xsl:attribute name="ID"
        ><xsl:value-of select="generate-id()"
        /></xsl:attribute>
       <xsl:value-of select="name()"/>="<SPAN STYLE="color:black"><xsl:value-of select="."/></SPAN>"
    </SPAN>
  </xsl:template>
    

  <xsl:template match="processing-instruction()">
    <DIV STYLE="margin-left:1em; color:maroon">
      <xsl:attribute name="id">
             <xsl:value-of select="generate-id()"/>
      </xsl:attribute>
      &lt;?<xsl:value-of select="name()"/><xsl:apply-templates select="@*"/>?&gt;
    </DIV>
  </xsl:template> 

  <xsl:template match="node()[nodeTypeString=cdatasection]">
    <pre>
       <xsl:attribute name="id">
             <xsl:value-of select="generate-id()"/>
       </xsl:attribute>cdata 
       &lt;![CDATA[<xsl:value-of select="."/>]]&gt;
    </pre>
  </xsl:template>

  <xsl:template match="text()">
    <SPAN>
      <xsl:attribute name="id">
             <xsl:value-of select="generate-id()"/>
      </xsl:attribute><xsl:value-of select="."/>
    </SPAN>
  </xsl:template>

</xsl:stylesheet>
