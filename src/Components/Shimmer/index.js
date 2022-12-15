// --------------- LIBRARIES ---------------
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

// --------------- ASSETS ---------------
import ShimmerPlaceholder from './ShimmerPlaceholder';
import { Matrics, Colors } from '../../CommonConfig';

const Dashboard = () => {
    return (
        <FlatList
            data={[1, 2, 3,4,5,6,7,8,9]}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            // contentContainerStyle={ContainerStyle.contentContainerStyle}
            renderItem={({ _, index }) => (
                <View style={{ flexDirection: 'row'}} key={index}>
                <ShimmerPlaceholder
                    key={index}
                    width={(Matrics.screenWidth / 2)-20}
                    height={Matrics.vs(100)}
                    shimmerStyle={{ borderRadius: Matrics.mvs(10) }}
                    style={{
                        marginTop: Matrics.mvs(12),
                        marginLeft: Matrics.mvs(12),
                        marginRight: Matrics.mvs(8),
                    }}
                />
                <ShimmerPlaceholder
                    key={index}
                    width={(Matrics.screenWidth / 2)-20}
                    height={Matrics.vs(100)}
                    shimmerStyle={{ borderRadius: Matrics.mvs(10) }}
                    style={{
                        marginTop: Matrics.mvs(12),
                        marginRight: Matrics.mvs(12),
                        marginLeft: Matrics.mvs(8),
                    }}
                />
                </View>
            )}
        />
    )
}

export default {
    Dashboard
};

const styles = {
    dashboardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Matrics.vs(20)
    }
};
