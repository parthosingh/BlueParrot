
import PriceImage from '../images/Image4.png';

function Pricing() {
  return (
    <>
      <h3> Pricing Table</h3>
      <div
        style={{
          backgroundImage: `url(${PriceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#2A3B62',
          color: 'white',
          height: '900px',
        }}
      >
        <div>
          <h1 style={{ width: '30%', marginLeft: '35%' }}>Plan & Pricing</h1>
        </div>

        <div style={{ marginLeft: '30%' }}>
          <pre>Startup Framework is free forever - you only pay for </pre>
          <pre>   custom domain hosting or to export your site.</pre>
        </div>

        <br /> <br />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 300px 300px',
            columnGap: '40px',
            marginLeft: '10%',
          }}
        >
          {/* Starter Plan */}
          <div
            style={{
              border: '1px solid white',
              borderRadius: '5px',
              paddingLeft: '15%',
            }}
          >
            <h4 style={{ paddingLeft: '5%' }}>Starter</h4>
            <h1 style={{ paddingLeft: '15px' }}>
              9.99 <sup style={{ fontSize: '1rem' }}>$</sup>
            </h1>

            <h5>
              <span style={{ color: 'green' , paddingRight:"5px"}}> ✓ </span>2 GB of space
            </h5>
            <h5>
              <span style={{ color: 'green',  paddingRight:"5px" }}> ✓ </span>14 days of backups
            </h5>
            <h5>
              <span style={{ color: 'green',  paddingRight:"5px" }}> ✓ </span>Social integerations
            </h5>
            <h5>
              <span style={{ color: 'green',  paddingRight:"5px"  }}> ✓ </span>Client billing
            </h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>Remote access</h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>Custom domain</h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>24hour support</h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>Admin tools </h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>Collaboration tools</h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>User managment</h5>

            <br />

            <div
              style={{
                border: '1px solid white',
                width: '50%',
                borderRadius: '25px',
                marginLeft: '15px',
                textAlign: 'center',
              }}
            >
              <p>Get Started</p>
            </div>
          </div>

          {/* Professional Plan */}
          <div
            style={{
              border: '1px solid white',
              borderRadius: '5px',
              paddingLeft: '15%',
            }}
          >
            <h4 style={{ paddingLeft: '5%' }}>Professional</h4>
            <h1 style={{ paddingLeft: '15px' }}>
              19.99 <sup style={{ fontSize: '1rem' }}>$</sup>
            </h1>

            <h5>
              <span style={{ color: 'green' }}> ✓ </span>2 GB of space
            </h5>
            <h5>
              <span style={{ color: 'green' }}> ✓ </span>14 days of backups
            </h5>
            <h5>
              <span style={{ color: 'green' }}> ✓ </span>social integrations
            </h5>
            <h5>
              <span style={{ color: 'green' }}> ✓ </span>Client billing
            </h5>
            <h5>
              <span style={{ color: 'green' }}> ✓ </span>Remote access
            </h5>
            <h5>
              <span style={{ color: 'green' }}> ✓ </span>Custom domain
            </h5>
            <h5>
              <span style={{ color: 'green' }}> ✓ </span>24hour support
            </h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>Admin tools </h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>Collaboration tools</h5>
            <h5 style={{ paddingLeft: '15px', color: '#81879F' }}>User managment</h5>

            <br />

            <div
              style={{
                border: '1px solid white',
                width: '50%',
                borderRadius: '25px',
                marginLeft: '15px',
                textAlign: 'center',
                backgroundColor: '#E93A7D',
              }}
            >
              <p>Get Started</p>
            </div>
          </div>

          {/* Team Plan */}
          <div
            style={{
              border: '1px solid white',
              paddingLeft: '15%',
              borderRadius: '5px',
            }}
          >
            <h4 style={{ paddingLeft: '5%' }}>Team</h4>
            <h1 style={{ paddingLeft: '15px' }}>
              49.99 <sup style={{ fontSize: '1rem' }}>$</sup>
            </h1>

            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>2 GB of space
            </h5>
            <h5>
              <span style={{ color: 'green' , paddingRight:"5px" }}> ✓ </span>14 days of backups
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px" }}> ✓ </span>social integrations
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>Client billing
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>Remote access
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>Custom domain
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>24 hours support
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>AAdmin tools 
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>Collaboration tools
            </h5>
            <h5>
              <span style={{ color: 'green' ,  paddingRight:"5px"}}> ✓ </span>User managment
            </h5>

            <br/>

            <div
              style={{
                border: '1px solid white',
                width: '50%',
                borderRadius: '25px',
                marginLeft: '15px',
                textAlign: 'center',
              }}
            >
              <p>Get Started</p>
            </div>
            <br />
          </div>
        </div>

        <br /> 
      </div>
    </>
  );
}

export { Pricing };
