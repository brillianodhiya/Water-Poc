import Footer from '@/components/Footer';
// import { GoogleIcon } from '@/components/Icons/Google';
// import { login } from '@/services/ant-design-pro/api';
// import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  // AlipayCircleOutlined,
  LockOutlined,
  // MobileOutlined,
  // TaobaoCircleOutlined,
  UserOutlined,
  // WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  // ProFormCaptcha,
  ProFormText,
} from '@ant-design/pro-components';
import {
  history,
  // SelectLang,
  // useIntl,
  useModel,
} from '@umijs/max';
import {
  Alert,
  // Button,
  message,
  // Typography,
} from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import { Helmet } from 'react-helmet';
import { loginUser } from '@/services/nebula/login';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<APINebula.LoginResult>({});
  const { initialState, refresh, setInitialState } = useModel('@@initialState');

  // const intl = useIntl();

  const fetchUserInfo = async (token: string) => {
    const userInfo = await initialState?.fetchUserInfo?.(token);
    if (userInfo) {
      console.log(userInfo, 'USER INFO');
      await setInitialState((s: any) => ({
        ...s,
        currentUser: userInfo,
      }));

      return {
        type: 'ok',
      };
    }
    return {
      type: 'fail',
    };
  };

  const handleSubmit = async (values: APINebula.LoginParams) => {
    try {
      // 登录
      const msg = await loginUser({
        ...values,
        email: values.email,
        password: values.password,
        autoLogin: values.autoLogin,
      });
      console.log(msg, 'MSG');
      if (msg.responseCode === 200) {
        message.success(msg.message);

        await fetchUserInfo(msg.token);
        await refresh();
        // const urlParams = new URL(window.location.href).searchParams;
        // console.log(urlParams, 'URL PARAM');
        // history.replace('/');
        window.location.replace('/');

        return;
      } else {
        // message.error(msg.message);
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = 'Login Failed!';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;

  const autoLogin = async () => {
    const token = window.localStorage.getItem('token') || '';
    const w = await fetchUserInfo(token);
    await refresh();

    // const urlParams = new URL(window.location.href).searchParams;
    // console.log(urlParams, 'URL PARAM');
    if (w.type == 'ok') {
      window.location.replace('/');
    }
  };

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      autoLogin();
    }
  }, []);

  return (
    // <HelmetProvider>
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | Login</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.lang} data-lang>
          {/* {SelectLang && <SelectLang />} */}
        </div>
        <div className={styles.content}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <img alt="logo" src="/logoaat.png" width={250} />
          </div>
          <LoginForm
            // logo={<img alt="logo" src="/nebula.svg" />}
            title="Log in"
            subTitle={'Please input your information in the fields below to enter your account'}
            initialValues={{
              autoLogin: true,
            }}
            // actions={[
            //   // <Button key="google-sigin" block size="large">
            //   //   <GoogleIcon /> Sign in with Google
            //   // </Button>,
            //   <div key={'signup'} className="signup-text">
            //     <Typography.Paragraph>
            //       Don’t have an account?{' '}
            //       <Typography.Link
            //         className="signup-link"
            //         onClick={() => history.push('/user/register')}
            //       >
            //         Sign up
            //       </Typography.Link>
            //     </Typography.Paragraph>
            //   </div>,
            // ]}
            onFinish={async (values) => {
              await handleSubmit(values as APINebula.LoginParams);
            }}
            className="LoginPage"
          >
            {status === 'error' && loginType === 'account' && (
              <LoginMessage content={'Verification Code Error'} />
            )}

            <ProFormText
              // initialValue={'admin@bita.com'}
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'Email'}
              rules={[
                {
                  required: true,
                  message: 'Email is required!',
                },
              ]}
              label="Email"
              requiredMark="optional"
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              // initialValue={'qwerty123'}
              placeholder={'Password'}
              rules={[
                {
                  required: true,
                  message: 'Password is required!',
                },
              ]}
              label="Password"
            />

            {/* <div
              style={{
                marginBottom: 24,
              }}
            >

              <a

                onClick={() => history.push('/user/forgot-password')}
              >
                Forgot Pasword ?
              </a>
            </div> */}
          </LoginForm>
        </div>
        <Footer />
      </div>
    </>
    // </HelmetProvider>
  );
};

export default Login;
