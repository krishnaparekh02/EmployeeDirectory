// --------------- LIBRARIES ---------------
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

// --------------- ASSETS ---------------
import ShimmerPlaceholder from './ShimmerPlaceholder';
import { Matrics, Colors } from '../../CommonConfig';

const Dashboard = () => {
    return (
        <>
            <View style={styles.dashboardContainer}>
                <View>
                    <ShimmerPlaceholder
                        width={(Matrics.screenWidth / 2)}
                        height={Matrics.vs(80)}
                        shimmerStyle={{ borderRadius: Matrics.vs(6) }}
                    />
                    <ShimmerPlaceholder
                        width={Matrics.s(160)}
                        height={Matrics.vs(12)}
                        shimmerStyle={{ borderRadius: Matrics.vs(6) }}
                        style={{ marginTop: Matrics.mvs(8) }}
                    />
                </View>
                <ShimmerPlaceholder
                    width={(Matrics.screenWidth / 3) - Matrics.vs(10)}
                    height={(Matrics.screenWidth / 3) - Matrics.vs(10)}
                    shimmerStyle={{ borderRadius: Matrics.mvs(10) }}
                />
            </View>
            <View style={{ marginHorizontal: Matrics.vs(20)}}>
                <ShimmerPlaceholder
                    width={Matrics.s(150)}
                    height={Matrics.vs(20)}
                    shimmerStyle={{ borderRadius: Matrics.vs(6) }}
                    style={{ marginTop: Matrics.mvs(8) }}
                />
                <ShimmerPlaceholder
                    width={Matrics.s(300)}
                    height={Matrics.vs(12)}
                    shimmerStyle={{ borderRadius: Matrics.vs(6) }}
                    style={{ marginTop: Matrics.mvs(8) }}
                />
            </View>
        </>
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
