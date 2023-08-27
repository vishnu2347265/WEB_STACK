<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/products">
    <html>
        <body>
            <h1>Product Catalogue</h1>
            <table border="1">
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                <xsl:for-each select="product">
                <tr>
                    <td><xsl:value-of select="id" /> </td>
                    <td><xsl:value-of select="name" /> </td>
                    <td><xsl:value-of select="price" /> </td>
                    <td><xsl:value-of select="description" /> </td>
                </tr>
            </xsl:for-each>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>
