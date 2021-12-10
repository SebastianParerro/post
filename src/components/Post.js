import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UploadIcon from '@mui/icons-material/Upload';

const Post = ({ author, avatar, nickname, date, content, photo, countLikes, countComents, countReposts }) => {
	const divStyle = {
		backgroundColor: "#0d1a27",
		width: "750px",
		height: "auto",
		color: "white",
		marginBottom: "20px",
		borderRadius: "20px",
	};

	const infoStyle = {
		display: 'flex',
	}

	const nameStyle = {
		color: "white",
		fontSize: "20px",
		fontWeight: "bold",

	};

	const photoStyle = {
		borderRadius: "50%",
		margin: "20px 20px 0",
		width: "70px",
		height: "70px",
	};

	const nicknameStyle = {
		color: "#667683",
		paddingLeft: "10px",
	};

	const imageStyle = {
		width: "600px",
		borderRadius: "20px",
		margin: "10px 20px 20px 110px",
	};

	const styleColumn = {
		display: "flex",
		flexDirection: "column",
		marginTop: "20px",
	};

	const countersStyle = {
		display: "flex",
		justifyContent: "space-around",
	}

	return (
		<div style={divStyle}>
			<div style={infoStyle}>
				<img style={photoStyle} src={avatar} alt="" />
				<div style={styleColumn}>

					<div>
						<span style={nameStyle}>{author}</span>
						<span style={nicknameStyle}>{nickname} &middot; {date}</span>
					</div>

					<div>
						<span>{content}</span>
					</div>

				</div>

			</div>

			<img style={imageStyle} src={photo} alt="" />
			<div style={countersStyle}>
				<IconButton color="primary">
					<ChatIcon />
					{countComents}
				</IconButton>

				<IconButton color="primary">
					<AutorenewIcon />
					{countReposts}
				</IconButton>

				<IconButton color="primary">
					<FavoriteIcon />
					{countLikes}
				</IconButton>

				<IconButton color="primary">
					<UploadIcon />
				</IconButton>

			</div>
		</div>
	);
}

export default Post;