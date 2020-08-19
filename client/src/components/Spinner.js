
import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    paper: {
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden"
    },
};

class Spinner extends React.Component {
    render() {
        const { spinner } = this.props.auth;
        const { classes } = this.props;
        return (
            spinner ?
                <Dialog
                    open={spinner || false}
                    BackdropProps={{
                        classes: {
                            root: classes.root
                        }
                    }
                    }
                    PaperProps={{
                        classes: {
                            root: classes.paper
                        }
                    }}

                >
                    <DialogContent style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <CircularProgress style={{ color: 'pink' }} />
                    </DialogContent>

                </Dialog>
                : null

        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Spinner));
