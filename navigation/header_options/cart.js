import { Colors, IconButton } from "react-native-paper";
import ScanIcon from "../../assets/scan.svg";

const scanIcon = () => <ScanIcon width={30} height={30} fill="#fff" />;

const CartHeaderRight = ({ navigation }) => {
    const _handleSearchNavigation = () => {
        navigation.navigate("Search");
    };

    return (
        <>
            <IconButton
                icon="search"
                onPress={_handleSearchNavigation}
                color={Colors.white}
            />
            <IconButton color={Colors.white} icon={scanIcon} />
        </>
    );
};

const cartheaderOptions = ({ navigation }) => ({
    headerRight: () => <CartHeaderRight navigation={navigation} />,
});

export default cartheaderOptions;
