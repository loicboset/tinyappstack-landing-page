import { useState } from 'react';
import { CheckCircleIcon, ExclamationIcon, RefreshIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpFormContainer = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('');

  const postUrl = `https://tinyappstack.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  const handleNewSubscriber = (e, subscribe) => {
    e.preventDefault();
    setShow(true)
    subscribe({ EMAIL: email })
  };

  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <form onSubmit={(e) => handleNewSubscriber(e, subscribe)}>
            <div className="flex mt-1 rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  aria-label='email address'
                  className="block w-full px-2 text-black border-gray-300 rounded-none pl-2text-black focus:ring-indigo-500 focus:border-indigo-500 rounded-l-md sm:text-sm"
                  placeholder="alan.grant@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                I'm in!
              </button>
            </div>
            {show && (
              <StatusMessage
                status={status}
                message={message}
                close={() => setShow(false)}
              />
            )}
          </form>
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;

const StatusMessage = ({ status, message, close }) => {

  return (
    <div className="p-1 mt-4 bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">

          {status === "sending" && <RefreshIcon className="w-6 h-6 text-gray-400 animate-spin" aria-hidden="true" />}
          {status === "error" && <ExclamationIcon className="w-6 h-6 text-red-900" aria-hidden="true" />}
          {status === "success" && <CheckCircleIcon className="w-6 h-6 text-green-400" aria-hidden="true" />}
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          {status === "sending" && <p className="text-sm font-medium text-gray-900">sending ...</p>}
          {status === "error" && <p className="text-sm font-medium text-red-900" dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <p className="text-sm font-medium text-gray-900">You are in! 🥳</p>}
        </div>
        <div className="flex flex-shrink-0 ml-4">
          <button
            className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={close}
          >
            <span className="sr-only">Close</span>
            <XIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
};
