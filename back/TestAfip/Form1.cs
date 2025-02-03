namespace TestAfip
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private async Task button1_Click(object sender, EventArgs e)
        {
            var sol = new AFIP.WSFE.FECAERequest();

            sol.FeCabReq.PtoVta = 1;

            //sol.Body.Auth.Sign = "TODO";
            //sol.Body.Auth.Cuit = 20283529844;


            var client = new AFIP.WSFE.ServiceSoapClient(AFIP.WSFE.ServiceSoapClient.EndpointConfiguration.ServiceSoap);
            var response = await client.FECAESolicitarAsync(new AFIP.WSFE.FEAuthRequest(), sol);

            //response.Body.FECAESolicitarResult;
            var tpoComp = await client.FEParamGetTiposCbteAsync(new AFIP.WSFE.FEAuthRequest());
            //tpoComp.Body.FEParamGetTiposCbteResult.ResultGet.First()
            var cli2 = new AFIP.WSAA.LoginCMSClient(AFIP.WSAA.LoginCMSClient.EndpointConfiguration.LoginCms);
            cli2.loginCmsAsync()
        }
    }
}