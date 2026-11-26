import {test} from '@playwright/test';
import { JMeterCommons } from '../../commons/load/jmeter-commons';

test.describe('Load Tests', () => {

    let jmeter: JMeterCommons;

    test.beforeEach(() => {
        jmeter = new JMeterCommons();
    });

    //Test Case 1: Run a JMeter test for the test plan `LoadTest.jmx`
    test('Run LoadTest', async () => {
        await jmeter.runJMeterTestPlan('LoadTest.jmx');
    });

});