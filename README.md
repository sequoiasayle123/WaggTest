To deploy for the first time
1. Open a new folder in VScode
2. Open a terminal in VScode
3. In the terminal type
   git clone
4. Wait for repo to be cloned
5. The rest of the deploy instructions follow MSlearn istructions from https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-vscode
6. In the terminal, ensure you're in the myExpressApp directory, then start Visual Studio Code with the following command:
   code .
7. In Visual Studio Code, in the Activity Bar, select the Azure logo.
8. In the App Service explorer, select Sign in to Azure... and follow the instructions.
9. In Visual Studio Code, you should see your Azure email address in the Status Bar and your subscription in the AZURE APP SERVICE explorer.
10. Right-click on App Services and select Create new Web App. A Linux container is used by default.
11. Type a globally unique name for your web app. 
12. In Select a runtime stack, select the Node.js version you want. (Generally an LTS version).
13. In Select a pricing tier, select Free (F1) and wait for the resources to be created in Azure.
14. In the popup Always deploy the workspace "myExpressApp" to <app-name>", select Yes.
15. While Visual Studio Code creates the Azure resources and deploys the code, it shows progress notifications.
16. Once deployment completes, select Browse Website in the notification popup. The browser should display the Express default page.

To redeploy
1. In the terminal, ensure you're in the myExpressApp directory, then start Visual Studio Code with the following command:
   code . 
2. In Visual Studio Code, in the Activity Bar, select the Azure logo.
3. In the App Service explorer, select Sign in to Azure... and follow the instructions.
4. In Visual Studio Code, you should see your Azure email address in the Status Bar and your subscription in the AZURE APP SERVICE explorer.
5. Right-click on App Services and select Redeploy

To run locally
1. Move into your app folder
   cd <my_app>
3. enter npm start in the terminal
4. open localhost:3000 to view the app
