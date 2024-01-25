import { Pressable, Text, View, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;

    const getDate = () => {
        const today = new Date();
        return today.toLocaleDateString();
    }

    return (
        <View style={Styles.page}>
            <View style={Styles.headerView}>
                <Text style={Styles.headerText}>MAD LIBS</Text>
            </View>

            <View style={Styles.subheaderView}>
   

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={Styles.subHeaderText}>HALL PASS</Text>
                    {/* Add Image component at the end */}
                    <Image
                        source={require('../assets/001.png')} // Replace with the actual path to your image
                        style={{ width: 50, height: 50, marginLeft: 5 }} // Adjust width, height, and margin as needed
                    />
                </View>
            </View>

            <View style={Styles.bodyView}>
                <Text style={Styles.bodyText}>Date: {getDate()}</Text>
                <Text>
                    <Text style={Styles.dynamicText}>{name}</Text>
                    <Text style={Styles.bodyText}> is too cool</Text>
                </Text>
                <Text>
                    <Text style={Styles.bodyText}>for</Text>
                    <Text style={Styles.dynamicText}> {noun} </Text>
                    <Text style={Styles.bodyText}>class.</Text>
                </Text>
                <Text>
                    <Text style={Styles.bodyText}>Instead, he/she will be</Text>
                </Text>
                <Text>
                    <Text style={Styles.bodyText}>attending the </Text>
                    <Text style={Styles.dynamicText}>{event}</Text>
                </Text>

            </View>

            <View style={Styles.footerView}>
                <Text style={Styles.signatureText}>Signed: ______________________</Text>
            </View>
        </View>
    )
}