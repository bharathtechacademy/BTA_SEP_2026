import { exec } from 'child_process';

export class JMeterCommons {

    //Common method to run a command from the command line (cmd)
    runCommand(command: string): Promise<String> {

        //Print the command along with the execution started message. 
        console.log(`Executing command: ${command} from command line`);


        return new Promise((resolve, reject) => {

            //`exec` is a default method will run the command in a shell and buffer the output
            exec(command, (error, stdout, stderr) => {

                if (error) {
                    reject(`Script has failed with the error. : ${error.message}`);
                } else {
                    resolve(stdout);
                }

                console.log(`********Execution is completed for the command : ${command}***********`);

            })
        });
    }


    //Common method to run the JMeter test plan 
    async runJMeterTestPlan(testPlan: string): Promise<void> {

        //Collect and store JMeter folder paths. 
        const projectRoot = process.cwd();//Current working directory (playwright-tdd-framework)
        const jmeterBasePath = `${projectRoot}/jmeter`; 
        const jmeterToolPath = `${jmeterBasePath}/bin/jmeter.bat`; 
        const jmeterTestPlanPath = `${jmeterBasePath}/testplans/${testPlan}`;

        //Add the folder paths to store the test results. 
        const jmeterCsvResultPath = `${jmeterBasePath}/results/TestResults_${Date.now()}.csv`;
        const jmeterHtmlResultPath = `${jmeterBasePath}/report-output`;

        //Construct the commands to run JMeter test plans. 
        const jmeterRunCommand =`${jmeterToolPath} -n -t ${jmeterTestPlanPath} -l ${jmeterCsvResultPath}`;
        const jmeterReportCommand =`${jmeterToolPath} -g ${jmeterCsvResultPath} -o ${jmeterHtmlResultPath}`;

        //Run the JMeter test plan and generate the report.
        await this.runCommand(jmeterRunCommand);
        await this.runCommand(jmeterReportCommand);
  
    }

}