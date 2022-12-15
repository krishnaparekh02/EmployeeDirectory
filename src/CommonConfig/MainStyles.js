import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Matrics from './Matrics';
import Fonts from './Fonts';

const MainStyles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    shadow: (offset, opacity, radius, elevation) => ({
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: Matrics.s(
                Array.isArray(offset) && offset.length > 0 ? offset[0] : 0,
            ),
            height: Matrics.vs(
                Array.isArray(offset) && offset.length > 1 ? offset[1] : 2,
            ),
        },
        shadowOpacity: opacity ?? 0.2,
        shadowRadius: Matrics.mvs(radius ?? 5),
        elevation: elevation ?? 4,
    }),
});

export default MainStyles;
