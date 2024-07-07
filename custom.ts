namespace custom {
    /**
     * 基準高度の気圧 (hPa)、測定高度の気圧 (hPa) および温度 (℃) から高度差を計算します。
     * @param basePressure 基準高度の気圧 (hPa)
     * @param measuredPressure 測定高度の気圧 (hPa)
     * @param temperature 温度 (℃)
     * @returns 高度差 (メートル)
     */
    //% block="基準高度の気圧 %basePressure (hPa) 測定高度の気圧 %measuredPressure (hPa) 温度 %temperature (℃) から高度差を計算"
    export function calculateAltitude(basePressure: number, measuredPressure: number, temperature: number): number {
        // 定数
        const R = 287.05; // 気体定数 (J/(kg*K))
        const g = 9.80665; // 重力加速度 (m/s^2)
        const L = 0.0065; // 気温の勾配 (K/m)

        // 温度を摂氏からケルビンに変換
        let tempK = temperature + 273.15;

        // 気圧比
        let pressureRatio = measuredPressure / basePressure;

        // 高度差の計算
        let altitudeDifference = (tempK / L) * (1 - Math.pow(pressureRatio, (R * L) / g));

        return altitudeDifference;
    }
}
