import Footer from '@/components/Footer';
import { Button, Form, Input, Typography } from 'antd';

import React from 'react';
import styles from './index.less';

const ForgotPassword: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {/* {SelectLang && <SelectLang />} */}
      </div>
      <div className={styles.content}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img alt="logo" src="/nebula.svg" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div>
            <div style={{ textAlign: 'center', maxWidth: 760 }}>
              <Typography.Title>Forgot Password ?</Typography.Title>
              <Typography.Paragraph>
                Don’t worry we can help you out! if you still remember your email address you can
                quickly reset your password. Just input that information in the fields below and
                click on the button. This will send you a new email that will link you to the
                password change website.
              </Typography.Paragraph>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Form layout="vertical" style={{ maxWidth: 360 }}>
                <Form.Item label="Email">
                  <Input placeholder="Enter Your Email" size="large" style={{ borderRadius: 4 }} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" shape="round" size="large" htmlType="submit" block>
                    Request password change
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <Typography>
              Need Help <Typography.Link>Contact Us </Typography.Link>
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
