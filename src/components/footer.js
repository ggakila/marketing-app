import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub, faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-brands-svg-icons';


export default function footer() {
  return (
		<div id="contactUs" className="container  flex flex-col justify-center 0 text-black py-10 px-4 border-t-2 border-t-gray-900">
			<div className="flex justify-between">
				<div className="w-2/3">
					<h1 className="text-3xl md:text-4xl font-bold">KuzaBiz</h1>
					<div className="flex justify-between">
						<div className="flex flex-col justify-center gap-2">
							<h1 className="text-2xl md:text-3xl font-bold">Get in Touch</h1>
							<p>
								Have a question or need support? We are here to help. Call,
								Email or visit our offices.{" "}
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<div className="flex gap-2 items-center">
								<div className="flex w-10 bg-red-200">
									{/* <FontAwesomeIcon icon={faEnvelope} size='2x' /> */}
								</div>
								<div>
									<h3 className=" text-md md:text-lg font-semibold tracking-wide leading-normal">
										Email
									</h3>
									<p className="text-gray-700 font-medium underline leading-loose">
										hello@kuzabiz.io
									</p>
								</div>
							</div>
							<div className="flex gap-2">
								<div className="h-10 w-10">
									{/* <FontAwesomeIcon icon={faPhone} size='2x' /> */}
								</div>
								<div>
									<h3 className=" text-md md:text-lg font-semibold tracking-wide leading-normal">
										Phone
									</h3>
									<p className="text-gray-700 font-medium underline leading-loose">
										+7000000000
									</p>
								</div>
							</div>
							<div className="flex gap-2">
								<div className="h-10 w-10 ">
									{/* <FontAwesomeIcon icon={faMapMarker} size='2x' /> */}
								</div>
								<div>
									<h3 className=" text-md md:text-lg font-semibold tracking-wide leading-normal">
										Office
									</h3>
									<p className="text-gray-700 font-medium underline leading-loose">
										254 A Street CBD, KE
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex  flex-col gap-2 p-4">
					<h3 className="font-semibold">Follow us:</h3>
					<div className=" flex flex-col gap-2 items-center">
						<Link
							href="https://www.facebook.com/"
							className="flex gap-2 items-center justify-center w-7"
						>
							<FontAwesomeIcon
								icon={faFacebook}
								size="2x"
							/>
						</Link>
						<Link
							href="https://www.instagram.com/"
							className="flex gap-2 items-center justify-center w-7"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								size="2x"
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/"
							className="flex gap-2 items-center justify-center w-7"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size="2x"
							/>
						</Link>
						<Link
							href="https://twitter.com/"
							className="flex gap-2 items-center justify-center w-7"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								size="2x"
							/>
						</Link>
						<Link
							href="https://github.com/"
							className="flex gap-2 items-center justify-center w-7"
						>
							<FontAwesomeIcon
								icon={faGithub}
								size="2x"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex justify-between py-3 my-3 border-t-2 border-t-gray-900 items-center text-sm md:text-lg">
				<p>&copy; 2023 KuzaBiz. All rights reserved.</p>
				<div className="flex gap-3 underline">
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
					<p>Cookie Settings</p>
				</div>
			</div>
		</div>
	);
}
