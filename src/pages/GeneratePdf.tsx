import { useLocation } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
import { PDFViewer, StyleSheet, Document, Page, View, Text } from '@react-pdf/renderer';

import { ITriangleObject } from 'types/triangle';
import { radiansToDegrees } from 'utils/numbers';

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {
    color: 'black',
    padding: 30,
  },
  section: {
    marginBottom: 30,
  },
  flexRowSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  felxColumnSection_w50: {
    display: 'flex',

    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '50%',
  },
  heading1: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading2: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    marginBottom: 6,
  },
});

// Create Document Component
function BasicDocument(props: any) {
  const triangle = useLocation().state as ITriangleObject;

  return (
    <Center>
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.heading1}>{`Triangle ID ${triangle.id}`}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.text}>{`Date created: ${new Date(
                triangle.dateCreated
              ).toLocaleDateString()}`}</Text>
              <Text style={styles.text}>{`Author ID: ${triangle.authorId}`}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.image}>Triangle image placeholder</Text>
            </View>

            <View style={styles.section}>
              <View style={styles.flexRowSection}>
                <View style={styles.felxColumnSection_w50}>
                  <Text style={styles.heading2}>Sides</Text>
                  <Text style={styles.text}>{`a: ${triangle.data.sides[0]}`}</Text>
                  <Text style={styles.text}>{`b: ${triangle.data.sides[1]}`}</Text>
                  <Text style={styles.text}>{`c: ${triangle.data.sides[2]}`}</Text>
                </View>
                <View style={styles.felxColumnSection_w50}>
                  <Text style={styles.heading2}>Angles</Text>
                  <Text style={styles.text}>{`A: ${radiansToDegrees(
                    triangle.data.angles[0]
                  )} [°]`}</Text>
                  <Text style={styles.text}>{`B: ${radiansToDegrees(
                    triangle.data.angles[1]
                  )} [°]`}</Text>
                  <Text style={styles.text}>{`C: ${radiansToDegrees(
                    triangle.data.angles[2]
                  )} [°]`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.flexRowSection}>
              <View style={styles.felxColumnSection_w50}>
                <Text style={styles.heading2}>Vertices</Text>
                <Text style={styles.text}>{`1: ${triangle.data.vertices[0]}`}</Text>
                <Text style={styles.text}>{`2: ${triangle.data.vertices[1]}`}</Text>
                <Text style={styles.text}>{`3: ${triangle.data.vertices[2]}`}</Text>
              </View>

              <View style={styles.felxColumnSection_w50}>
                <Text style={styles.heading2}>Other</Text>
                <Text style={styles.text}>{`Area: ${triangle.data.area}`}</Text>
                <Text style={styles.text}>{`Perimeter: ${triangle.data.perimeter}`}</Text>
                <Text style={styles.text}>{`Type by sides: ${triangle.data.typeBySides}`}</Text>
                <Text style={styles.text}>{`Type by angles: ${triangle.data.typeByAngles}`}</Text>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Center>
  );
}
export default BasicDocument;
