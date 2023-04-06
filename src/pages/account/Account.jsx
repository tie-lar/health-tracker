import './account.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';

const Account = () => {
  return (
    <>
      <div className='gradient__bg section__padding account_header default_font'>
          <div className='account_header_left'>
            <h2 className="margin_bottom_20">User 123</h2>
            <div className='account_image'>
              <img src={circle} alt="" />
            </div>
          </div>
          <div className='account_header_right'>
            <button type='button' className='default_button'>Edit Account</button>
            <button type='button' className='default_button'>History</button>
          </div>
      </div>
      <div className='section__padding account_header default_font'>
          <div className='account_header_left'>
            <div className='temp_graph'>
              <img src={feature} alt="" />
            </div>
          </div>
          <div className='account_header_right'>
            <h3>Since You Started Your Journey</h3>
            <div className='account_stats_group'>
                <button type='button' className='default_button'>Edit Account</button>
                <button type='button' className='default_button'>History</button>
                <button type='button' className='default_button'>Edit Account</button>
                <button type='button' className='default_button'>History</button>
                <button type='button' className='default_button'>Edit Account</button>
                <button type='button' className='default_button'>History</button>
            </div>
          </div>
      </div>
    </>
  )
};

export default Account;
