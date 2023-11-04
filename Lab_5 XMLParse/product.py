from lxml import etree

# Load XML and XSL files
xml = etree.parse(r"Lab 5_XMLParse\products.xml")
xsl = etree.parse(r"Lab 5_XMLParse\xsltransform.xsl")
xsd = etree.parse(r"Lab 5_XMLParse\product_schema.xsd")

# Apply XSL transformation
transform = etree.XSLT(xsl)
html = transform(xml)
# print(html)

# Save transformed HTML to a file
with open('Lab 5_XMLParse\product.html', 'wb') as output_file:
    output_file.write(etree.tostring(html, pretty_print=True))

# Load XSD schema
schema = etree.XMLSchema(xsd)

# Validate transformed HTML against XSD schema
validation_result = schema.validate(xml)

if validation_result:
    print("Validation successful!")
else:
    print("Validation errors:")
    print("Validation Result :",validation_result)
    print(schema.error_log)
