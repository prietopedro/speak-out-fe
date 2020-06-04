import React from "react";
import { Modal } from "antd";

const PageSizeModal = (props) => {
	const handleOk = (e) => {
		props.togglePageSizeModal(false);
	};

	return (
		<div>
			<Modal
				title="Responsiveness"
				visible={props.pageSizeModal}
				onOk={handleOk}
				onCancel={handleOk}
			>
				<p>
					Page responsiveness was not a part of this team release canvas since
					we were tasked with dashboard functionality. As a result this
					application looks the best in screens with at least 1545px width.
				</p>
			</Modal>
		</div>
	);
};

export default PageSizeModal;
