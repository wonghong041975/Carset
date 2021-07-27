basic.forever(function () {
    if (mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE)) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Back)
        basic.pause(1000)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinRight)
        basic.pause(1000)
    } else {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    }
})
