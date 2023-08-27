In the validation process, the XML product data is converted from the
e-commerce catalog into a user friendly HTML format while adhering to
a predefined XSD (XML Schema Definition).

The XML data is transformed
using XSLT to improve the presentation of the XML data in a structured
HTML structure. The transformation process includes defining templates
that correspond to specific XML nodes. The XML data is extracted and
included in the HTML structure using the XML value-of function.


Before the transformation, the XSD data is validated to ensure compliance
with specified rules. The XSD schema specifies the structure and limits
for product elements such as numerical price values.

The validation errors are captured to identify and potentially correct the non-conformity of the data.
This case study demonstrates proficiency in XML-as-a-Service (XSLT) and schema
creation. It demonstrates manipulation of data, ensuring accuracy, and providing
improved data visualization on the website.

Here 5 files are being used

products.xml - which defines the xml form data that we want to convert into a HTML

transform.xsl - the extensible stylesheet which defines the style of how the
xml data is to be structured

product_schema.xsd - the schema file to which the xml corresponds to with appropriate tags

product.py - python script to read both xml as well as the xsl file and create a HTML file
and create a validation logic to compare the created html and the existing xml schema

product.html  -  the Dynamic html content that is created using the python script
