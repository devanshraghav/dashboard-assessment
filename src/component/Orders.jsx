import React from 'react'

const Orders = () => {
  return (
    <div className='bg-gray-400 rounded-md m-2 text-white'>
        <h2 className='text-xl font-bold'>Recent Orders</h2>

        <div className='overflow-x-auto text-white'>
            <table className='min-w-full overflow-hidden text-white'>
                <thead>
                    <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider'>
                            Customer
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider'>
                            Order No.
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider'>
                            Amount
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider'>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0 w-10 h-10'>
                                    <img src='' alt='user-icon' className='w-full h-full rounded-full' />
                                </div>
                                <div className='ml-3'>
                                    <h3 className='whitespace-nowrap'>
                                        Wade Warren
                                    </h3>
                                </div>
                            </div>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <p className='whitespace-nowrap'>15478256</p>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <p className='whitespace-nowrap'>$124.00</p>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                <span aria-hidden className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                                <span className='relative'>Delivered</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0 w-10 h-10'>
                                    <img src='' alt='user-icon' className='w-full h-full rounded-full' />
                                </div>
                                <div className='ml-3'>
                                    <h3 className='whitespace-nowrap'>
                                        Wade Warren
                                    </h3>
                                </div>
                            </div>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <p className='whitespace-nowrap'>15478256</p>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <p className='whitespace-nowrap'>$124.00</p>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                <span aria-hidden className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                                <span className='relative'>Delivered</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0 w-10 h-10'>
                                    <img src='' alt='user-icon' className='w-full h-full rounded-full' />
                                </div>
                                <div className='ml-3'>
                                    <h3 className='whitespace-nowrap'>
                                        Wade Warren
                                    </h3>
                                </div>
                            </div>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <p className='whitespace-nowrap'>15478256</p>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <p className='whitespace-nowrap'>$124.00</p>
                        </td>

                        <td className='p-5 border-b border-gray-200 text-sm'>
                            <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                <span aria-hidden className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                                <span className='relative'>Delivered</span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Orders